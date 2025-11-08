import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimvcoEntity } from './tIMVCO.entity';

@Index('PK_TIMMDA', ['mdacodigo'], { unique: true })
@Entity('TIMMDA', { schema: 'SANKHYA' })
export class TimmdaEntity {
  @Column('int', { primary: true, name: 'MDACODIGO' })
  mdacodigo: number;

  @Column('varchar', { name: 'MDAMIDIA', nullable: true, length: 30 })
  mdamidia: string | null;

  @Column('char', { name: 'MDALEGADO', nullable: true, length: 1 })
  mdalegado: string | null;

  @OneToMany(() => TimvcoEntity, (timvcoEntity) => timvcoEntity.vcomidia)
  timvcos: TimvcoEntity[];
}
