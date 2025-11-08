import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TwfprnEntity } from './tWFPRN.entity';

@Index('PK_TWFGRU', ['nugrupo'], { unique: true })
@Entity('TWFGRU', { schema: 'SANKHYA' })
export class TwfgruEntity {
  @Column('int', { primary: true, name: 'NUGRUPO' })
  nugrupo: number;

  @Column('int', { name: 'GRUPOPAI', nullable: true })
  grupopai: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @OneToMany(() => TwfprnEntity, (twfprnEntity) => twfprnEntity.nugrupo)
  twfprns: TwfprnEntity[];
}
