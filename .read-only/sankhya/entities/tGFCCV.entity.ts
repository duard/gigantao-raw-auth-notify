import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfcvnEntity } from './tGFCVN.entity';

@Index('PK_TGFCCV', ['codcanal'], { unique: true })
@Entity('TGFCCV', { schema: 'SANKHYA' })
export class TgfccvEntity {
  @Column('int', { primary: true, name: 'CODCANAL' })
  codcanal: number;

  @Column('varchar', { name: 'DESCRCANAL', nullable: true, length: 30 })
  descrcanal: string | null;

  @Column('int', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;

  @OneToMany(() => TgfcvnEntity, (tgfcvnEntity) => tgfcvnEntity.codcanal)
  tgfcvns: TgfcvnEntity[];
}
