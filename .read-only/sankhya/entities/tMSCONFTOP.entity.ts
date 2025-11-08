import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCONFTOP', ['chave', 'codtipoper'], { unique: true })
@Entity('TMSCONFTOP', { schema: 'SANKHYA' })
export class TmsconftopEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('int', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('varchar', { name: 'TIPO', length: 10 })
  tipo: string;

  @Column('varchar', { name: 'USASEMCONF', nullable: true, length: 10 })
  usasemconf: string | null;

  @Column('varchar', { name: 'TIPDOCPAMCARD', nullable: true, length: 10 })
  tipdocpamcard: string | null;
}
