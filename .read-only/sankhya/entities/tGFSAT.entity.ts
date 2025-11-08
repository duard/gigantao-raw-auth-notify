import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfeqfEntity } from './tGFEQF.entity';

@Index('PK_TGFSAT', ['codsat'], { unique: true })
@Entity('TGFSAT', { schema: 'SANKHYA' })
export class TgfsatEntity {
  @Column('int', { primary: true, name: 'CODSAT' })
  codsat: number;

  @Column('varchar', { name: 'CODATIVACAO', nullable: true, length: 32 })
  codativacao: string | null;

  @Column('varchar', { name: 'ASSINATURA', nullable: true })
  assinatura: string | null;

  @Column('varchar', { name: 'MODELO', nullable: true, length: 60 })
  modelo: string | null;

  @Column('char', { name: 'HOMOLOGA', nullable: true, length: 1 })
  homologa: string | null;

  @Column('varchar', { name: 'CNPJHOMOLOG', nullable: true, length: 14 })
  cnpjhomolog: string | null;

  @Column('varchar', { name: 'IPWEBCONNECTION', nullable: true, length: 30 })
  ipwebconnection: string | null;

  @Column('char', { name: 'COMPARTILHADO', nullable: true, length: 1 })
  compartilhado: string | null;

  @ManyToOne(() => TgfeqfEntity, (tgfeqfEntity) => tgfeqfEntity.tgfsats)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip: TgfeqfEntity;
}
