import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSAZ', ['codprod', 'codtipsaz', 'dtinicio'], { unique: true })
@Entity('TGFSAZ', { schema: 'SANKHYA' })
export class TgfsazEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('float', { name: 'PERCENTUAL', precision: 53 })
  percentual: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { primary: true, name: 'CODTIPSAZ', default: () => '(0)' })
  codtipsaz: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 200 })
  observacao: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfsazs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsazs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
