import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfexbEntity } from './tGFEXB.entity';

@Index('PK_TGFIEB', ['nuimport'], { unique: true })
@Entity('TGFIEB', { schema: 'SANKHYA' })
export class TgfiebEntity {
  @Column('int', { primary: true, name: 'NUIMPORT' })
  nuimport: number;

  @Column('datetime', { name: 'DTIMPORT' })
  dtimport: Date;

  @Column('datetime', { name: 'DHPROCESSO', nullable: true })
  dhprocesso: Date | null;

  @Column('varchar', { name: 'NOMEARQ', length: 300 })
  nomearq: string;

  @Column('varchar', { name: 'HASH_ARQUIVO', length: 300 })
  hashArquivo: string;

  @Column('char', { name: 'PROCESSADO', length: 1, default: () => "'N'" })
  processado: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @OneToMany(() => TgfexbEntity, (tgfexbEntity) => tgfexbEntity.nuimport)
  tgfexbs: TgfexbEntity[];
}
