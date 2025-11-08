import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcciteEntity } from './tCCITE.entity';

@Index('PK_TCCACA', ['codcc', 'tipo', 'codprod'], { unique: true })
@Entity('TCCACA', { schema: 'SANKHYA' })
export class TccacaEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 3103 })
  descricao: string | null;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @ManyToOne(() => TcciteEntity, (tcciteEntity) => tcciteEntity.tccacas)
  @JoinColumn([
    { name: 'CODCC', referencedColumnName: 'codcc' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tccite: TcciteEntity;
}
