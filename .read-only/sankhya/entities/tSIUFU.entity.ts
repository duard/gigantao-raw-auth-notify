import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TSIUFU', ['coduf', 'dtinivalid'], { unique: true })
@Entity('TSIUFU', { schema: 'SANKHYA' })
export class TsiufuEntity {
  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('datetime', { primary: true, name: 'DTINIVALID' })
  dtinivalid: Date;

  @Column('datetime', { name: 'DTFIMVALID' })
  dtfimvalid: Date;

  @Column('float', { name: 'VLRUNID', precision: 53 })
  vlrunid: number;

  @Column('int', { name: 'QTDDECIMAIS' })
  qtddecimais: number;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tsiufus)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
