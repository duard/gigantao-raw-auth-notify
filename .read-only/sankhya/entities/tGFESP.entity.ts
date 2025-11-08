import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgagruEntity } from './tGAGRU.entity';
import { TgffcpEntity } from './tGFFCP.entity';

@Index('PK_TGFESP', ['codest'], { unique: true })
@Entity('TGFESP', { schema: 'SANKHYA' })
export class TgfespEntity {
  @Column('int', { primary: true, name: 'CODEST' })
  codest: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @OneToMany(() => TgagruEntity, (tgagruEntity) => tgagruEntity.codest)
  tgagrus: TgagruEntity[];

  @OneToMany(() => TgffcpEntity, (tgffcpEntity) => tgffcpEntity.codest)
  tgffcps: TgffcpEntity[];
}
