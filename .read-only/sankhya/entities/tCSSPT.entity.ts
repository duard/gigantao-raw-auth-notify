import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsaltEntity } from './tCSALT.entity';

@Index('PK_TCSSPT', ['codscript'], { unique: true })
@Entity('TCSSPT', { schema: 'SANKHYA' })
export class TcssptEntity {
  @Column('smallint', { primary: true, name: 'CODSCRIPT' })
  codscript: number;

  @Column('char', { name: 'DECRSCRIPT', nullable: true, length: 40 })
  decrscript: string | null;

  @Column('datetime', { name: 'DHCRIACAO' })
  dhcriacao: Date;

  @Column('text', { name: 'CONTEUDO', nullable: true })
  conteudo: string | null;

  @OneToMany(() => TcsaltEntity, (tcsaltEntity) => tcsaltEntity.codscript2)
  tcsalts: TcsaltEntity[];
}
