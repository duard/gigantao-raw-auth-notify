import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TceiteEntity } from './tCEITE.entity';

@Index('PK_TCERAT', ['nuimp', 'sequencia', 'codparc'], { unique: true })
@Entity('TCERAT', { schema: 'SANKHYA' })
export class TceratEntity {
  @Column('int', { primary: true, name: 'NUIMP' })
  nuimp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcerats)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TceiteEntity, (tceiteEntity) => tceiteEntity.tcerats)
  @JoinColumn([
    { name: 'NUIMP', referencedColumnName: 'nuimp' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tceite: TceiteEntity;
}
