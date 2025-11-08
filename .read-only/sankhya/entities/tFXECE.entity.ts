import { Column, Entity, Index } from 'typeorm';

@Index('PK_TEMPCERTIFICADO', ['codempresa'], { unique: true })
@Entity('TFXECE', { schema: 'SANKHYA' })
export class TfxeceEntity {
  @Column('int', { primary: true, name: 'CODEMPRESA' })
  codempresa: number;

  @Column('char', { name: 'AMBIENTE', length: 1, default: () => "'N'" })
  ambiente: string;

  @Column('text', { name: 'CERTIFICADO', nullable: true })
  certificado: string | null;

  @Column('varchar', { name: 'PWCERTIFICADO', nullable: true, length: 100 })
  pwcertificado: string | null;

  @Column('varchar', { name: 'ASSINATURASAT', nullable: true, length: 800 })
  assinaturasat: string | null;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;
}
