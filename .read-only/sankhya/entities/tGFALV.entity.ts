import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFALV', ['codparc', 'codprj', 'sequencia'], { unique: true })
@Entity('TGFALV', { schema: 'SANKHYA' })
export class TgfalvEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPRJ' })
  codprj: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'IDFOTO', nullable: true, length: 200 })
  idfoto: string | null;

  @Column('smallint', {
    name: 'NROVOTOS',
    nullable: true,
    default: () => '(0)',
  })
  nrovotos: number | null;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfalvs)
  @JoinColumn([{ name: 'CODPRJ', referencedColumnName: 'codproj' }])
  codprj2: TcsprjEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfalvs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
