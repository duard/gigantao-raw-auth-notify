import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfpcoEntity } from './tGFPCO.entity';

@Index('PK_TGFCPD', ['codcomposicao'], { unique: true })
@Entity('TGFCPD', { schema: 'SANKHYA' })
export class TgfcpdEntity {
  @Column('int', { primary: true, name: 'CODCOMPOSICAO' })
  codcomposicao: number;

  @Column('char', { name: 'DESCRCOMPOSICAO', nullable: true, length: 30 })
  descrcomposicao: string | null;

  @Column('char', { name: 'SIGLACOMPOSICAO', nullable: true, length: 3 })
  siglacomposicao: string | null;

  @OneToMany(() => TgfpcoEntity, (tgfpcoEntity) => tgfpcoEntity.codcomposicao2)
  tgfpcos: TgfpcoEntity[];
}
