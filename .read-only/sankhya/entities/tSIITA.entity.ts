import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiilaEntity } from './tSIILA.entity';

@Index('PK_TSIITA', ['codita'], { unique: true })
@Entity('TSIITA', { schema: 'SANKHYA' })
export class TsiitaEntity {
  @Column('int', { primary: true, name: 'CODITA' })
  codita: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @OneToMany(() => TsiilaEntity, (tsiilaEntity) => tsiilaEntity.codita)
  tsiilas: TsiilaEntity[];
}
